import React from 'react';
import Generator from './Generator';
import {naturePrompts} from '../assets/naturePrompts';

const NaturePromptsPage = () => {
  return (
    <div>
      <p>Write a poem about:</p>
      <Generator dataset={naturePrompts}/>
    </div>
  );
}

export default NaturePromptsPage;