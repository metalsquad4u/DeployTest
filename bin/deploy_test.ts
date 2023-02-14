#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DeployTestStack } from '../lib/deploy_test-stack';

const app = new cdk.App();
new DeployTestStack(app, 'DeployTestStack', {
 
});