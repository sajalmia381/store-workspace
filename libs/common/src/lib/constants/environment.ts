import { InjectionToken } from "@angular/core";
import { IEnvironment } from "../interfaces";

export const ENV_TOKEN = new InjectionToken<IEnvironment>("ENVIRONMENT_TOKEN")