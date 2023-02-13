import { Octokit } from '@octokit/core';

const token = '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';
const octokit = new Octokit({ auth: token });

export class ApiClient {
  private readonly token: string;
  constructor(token: string) {
    this.token = token;
  }

  async searchCode(query: string) {
    const response = await octokit.request('GET /search/code', {
      q: 'addClass+in:file+language:js',
      headers: {
        accept: 'application/vnd.github.text-match+json',
      },
    });
    return response.data;
  }
}

export type SearchResult = ReturnType<ApiClient['searchCode']>;

export const apiClient = new ApiClient(token);
