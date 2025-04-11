
import aws from '/public/svg/skills/aws.svg';

import bootstrap from '/public/svg/skills/bootstrap.svg';
import css from '/public/svg/skills/css.svg';
import docker from '/public/svg/skills/docker.svg';
import figma from '/public/svg/skills/figma.svg';
import firebase from '/public/svg/skills/firebase.svg';
import git from '/public/svg/skills/git.svg';
import graphql from '/public/svg/skills/graphql.svg';
import html from '/public/svg/skills/html.svg';

import javascript from '/public/svg/skills/javascript.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import nextJS from '/public/svg/skills/nextJS.svg';


import react from '/public/svg/skills/react.svg';
import strapi from '/public/svg/skills/strapi.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import typescript from '/public/svg/skills/typescript.svg';



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    
    case 'html':
      return html;
    
    case 'docker':
      return docker;
   
    case 'css':
      return css;
 
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
   
    case 'react':
      return react;
    
    case 'typescript':
      return typescript;
  
    case 'bootstrap':
      return bootstrap;
 
    case 'mongodb':
      return mongoDB;
   
    case 'tailwind':
      return tailwind;
   
  
    case 'aws':
      return aws;
   
    case 'firebase':
      return firebase;
  
    case 'git':
      return git;
      
    case 'graphql':
      return graphql;
   
   
    case 'strapi':
      return strapi;
   
  
    case 'figma':
      return figma;
   
    
    default:
      break;
  }
}
