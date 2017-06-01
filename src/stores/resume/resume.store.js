'use strict';

import { EventEmitter } from 'events';
import Dispatcher from '../../dispatcher/dispatcher';
import * as ActionTypes from '../../actions/action-types';
import ResumeData from './resume.data.json';

const ResumeStore = () => {
    const RESUME_STORE_CHANGE_EVENT_NAME = 'change';
    const ResumeStoreEventEmitter = new EventEmitter();

    let data = null;

    function addListener(cb) {
        ResumeStoreEventEmitter.on(RESUME_STORE_CHANGE_EVENT_NAME, cb);
    }

    function removeListener(cb) {
        ResumeStoreEventEmitter.removeListener(RESUME_STORE_CHANGE_EVENT_NAME, cb);
    }

    function emit() {
        ResumeStoreEventEmitter.emit(RESUME_STORE_CHANGE_EVENT_NAME);
    }

    function getData() {
        return data;
    }

    Dispatcher.register(action => {
        if (action.type === ActionTypes.INITIALIZE_STORES) {
            if (!data) {
                data = ResumeData;
                emit();
            }
        }
    });

    return {
        getData,
        addListener,
        removeListener
    };
};

export default ResumeStore();