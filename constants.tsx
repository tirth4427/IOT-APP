
import { Product } from './types';

export const CATEGORIES = ['All', 'Arduino', 'Sensors', 'Modules', 'ICs', 'Batteries'];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Arduino Uno R3',
    price: 12.99,
    category: 'Arduino',
    image: 'https://picsum.photos/seed/arduino/400/400',
    description: 'The classic Arduino board for beginners and pros.',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Ultrasonic Sensor',
    price: 3.50,
    category: 'Sensors',
    image: 'https://picsum.photos/seed/sensor/400/400',
    description: 'HC-SR04 distance measurement module.',
    rating: 4.5
  },
  {
    id: '3',
    name: 'ESP32 NodeMCU',
    price: 8.75,
    category: 'Modules',
    image: 'https://picsum.photos/seed/esp32/400/400',
    description: 'WiFi and Bluetooth enabled powerful microcontroller.',
    rating: 4.9
  },
  {
    id: '4',
    name: '16x2 I2C LCD Display',
    price: 5.20,
    category: 'Modules',
    image: 'https://picsum.photos/seed/lcd/400/400',
    description: 'Easy to interface alphanumeric display.',
    rating: 4.3
  },
  {
    id: '5',
    name: 'Servo Motor MG996R',
    price: 6.40,
    category: 'Modules',
    image: 'https://picsum.photos/seed/servo/400/400',
    description: 'High torque metal gear servo motor.',
    rating: 4.7
  }
];
