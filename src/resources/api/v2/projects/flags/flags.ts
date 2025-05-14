// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as ReleaseAPI from './release';
import { Release, ReleaseCreateParams, ReleaseUpdateParams } from './release';
import * as EnvironmentsAPI from './environments/environments';
import {
  EnvironmentApprovalRequestsFlagCopyParams,
  EnvironmentMigrationSafetyIssuesParams,
  EnvironmentMigrationSafetyIssuesResponse,
  Environments,
} from './environments/environments';

export class Flags extends APIResource {
  environments: EnvironmentsAPI.Environments = new EnvironmentsAPI.Environments(this._client);
  release: ReleaseAPI.Release = new ReleaseAPI.Release(this._client);
}

Flags.Environments = Environments;
Flags.Release = Release;

export declare namespace Flags {
  export {
    Environments as Environments,
    type EnvironmentMigrationSafetyIssuesResponse as EnvironmentMigrationSafetyIssuesResponse,
    type EnvironmentApprovalRequestsFlagCopyParams as EnvironmentApprovalRequestsFlagCopyParams,
    type EnvironmentMigrationSafetyIssuesParams as EnvironmentMigrationSafetyIssuesParams,
  };

  export {
    Release as Release,
    type ReleaseCreateParams as ReleaseCreateParams,
    type ReleaseUpdateParams as ReleaseUpdateParams,
  };
}
