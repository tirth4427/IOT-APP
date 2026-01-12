
export interface ActivityLog {
  id: string;
  action: string;
  details: string;
  device: string;
  timestamp: string;
}

export enum ViewState {
  LANDING = 'LANDING',
  ADMIN_LOGIN = 'ADMIN_LOGIN',
  ADMIN_DASHBOARD = 'ADMIN_DASHBOARD',
  // Added missing view states used in components
  AUTH = 'AUTH',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  HOME = 'HOME',
  EXPLORE = 'EXPLORE',
  SHOP = 'SHOP',
  PROJECT_CREATE = 'PROJECT_CREATE',
  CHAT = 'CHAT',
  PROFILE = 'PROFILE',
  ABOUT = 'ABOUT'
}

export enum UserRole {
  CLIENT = 'CLIENT',
  DEVELOPER = 'DEVELOPER'
}

export enum ProjectStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}

export interface ProjectRequest {
  id: string;
  title: string;
  description: string;
  budget: number;
  deadline: string;
  category: string;
  status: ProjectStatus;
  clientName: string;
  proposals: any[];
}
