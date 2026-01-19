import { createJestEnvironment } from 'allure-jest/factory';
import FixedJsdomEnvironment from 'jest-fixed-jsdom';

export default createJestEnvironment(FixedJsdomEnvironment);
