// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ProjectsAPI from './projects/projects';
import { Projects } from './projects/projects';

export class FlagLinks extends APIResource {
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
}

FlagLinks.Projects = Projects;

export declare namespace FlagLinks {
  export { Projects as Projects };
}
