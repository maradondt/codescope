import { Octokit } from '@octokit/core';
import { RequestError } from '@octokit/request-error';

const token = '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';
const octokit = new Octokit({ auth: token });

export class ApiClient {
  private readonly token: string;
  constructor(token: string) {
    this.token = token;
  }

  async searchCode(query: string, language: string) {
    const response = await octokit.request('GET /search/code', {
      q: `${query}+in:file+language:${language}`,
      headers: {
        accept: 'application/vnd.github.text-match+json',
      },
      per_page: 10,
    });
    return response.data;
  }
}

export type SearchResult = Awaited<ReturnType<ApiClient['searchCode']>>;

export const apiClient = new ApiClient(token);
export type ApiError = RequestError;
