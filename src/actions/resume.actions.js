'use strict';

import Dispatcher from '../dispatcher/dispatcher';
import * as ActionTypes from './resume.action-types';

export function loadResume() {
    Dispatcher.dispatch({ type: ActionTypes.RESUME_LOAD, data: null });
}