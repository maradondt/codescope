import { Octokit } from '@octokit/core';
import { RequestError } from '@octokit/request-error';
import { config } from 'shared/config';

// const token = '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';
// const octokit = new Octokit({ auth: token });

export class ApiClient {
  private readonly octokit: Octokit;
  private abortControllers: Record<string, AbortController> = {};
  constructor(token: string) {
    this.octokit = new Octokit({ auth: token });
  }

  async searchCode(query: string, language: string) {
    const controller = this.getAbortController(this.searchCode);

    const response = await this.octokit.request('GET /search/code', {
      q: `${query}+in:file+language:${language}`,
      headers: {
        accept: 'application/vnd.github.text-match+json',
      },
      per_page: 10,
      request: {
        signal: controller.signal,
      },
    });
    return response.data;
  }

  abortRequest(method: Function) {
    const requestName = this.getMethodName(method);
    this.abortControllers[requestName]?.abort();
    delete this.abortControllers[requestName];
  }

  private getAbortController(method: Function) {
    const requestName = this.getMethodName(method);
    const controller = new AbortController();
    this.abortControllers[requestName] = controller;
    return controller;
  }

  private getMethodName(method: Function) {
    return method.name;
  }
}

export type SearchResult = Awaited<ReturnType<ApiClient['searchCode']>>;
export type CodeItem = SearchResult['items'][0];
export type ApiError = RequestError;

export const apiClient = new ApiClient(config.authToken);
