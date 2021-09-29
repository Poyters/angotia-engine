/// <reference types="node" />
export interface IAppInfo {
    version: string;
    nodeVersion: string;
    CPUs: number;
    totalMemeory: number;
    freeMemory: number;
    cpuUsage: NodeJS.CpuUsage;
    environment: string | undefined;
    machineStartedTime: Date;
    currentMachineTime: Date;
}
