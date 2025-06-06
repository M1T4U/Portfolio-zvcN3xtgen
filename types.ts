
import React from 'react';

export interface NavLink {
  id: string;
  label: string;
}

export interface SkillItem {
  name: string;
  icon: React.ReactNode;
  description: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Enthusiast';
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string; // Made optional as imageComponent can be used
  imageComponent?: React.ReactNode; // New property for custom image components
  liveLink?: string;
  repoLink?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}