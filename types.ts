import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}