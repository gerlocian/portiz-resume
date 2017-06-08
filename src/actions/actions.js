'use strict';

import Dispatcher from '../dispatcher/dispatcher';
import * as ActionTypes from './action-types';

export function initializeStores() {
    Dispatcher.dispatch({ type: ActionTypes.INITIALIZE_STORES, data: null});
}