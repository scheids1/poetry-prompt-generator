import React from 'react';
import Generator from './Generator';
import {prompts} from '../assets/prompts';

const WordsPromptPage = () => {

    return (
        <div>
            <p>Write a poem about:</p>
            <Generator dataset={prompts}/>
        </div>
    );
}

export default WordsPromptPage;