/*
 * Copyright 2026 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NotImplementedError } from '@backstage/errors';
import { DefaultCatalogModelSource } from './DefaultCatalogModelSource';
import { CatalogModelSource } from './types';

/**
 * A helper for creating common catalog model sources.
 *
 * @alpha
 */
export class CatalogModelSources {
  static default(): CatalogModelSource {
    return new DefaultCatalogModelSource();
  }

  private constructor() {
    throw new NotImplementedError();
  }
}
