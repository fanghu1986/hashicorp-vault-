/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Model from '@ember-data/model';
import { FormField } from 'vault/app-types';

export default class PkiConfigCrlModel extends Model {
  autoRebuild: boolean;
  autoRebuildGracePeriod: string;
  enableDelta: boolean;
  expiry: string;
  deltaRebuildInterval: string;
  disable: boolean;
  ocspExpiry: string;
  ocspDisable: boolean;
  crlPath: string;
  formFields: FormField[];
  get canSet(): boolean;
}
