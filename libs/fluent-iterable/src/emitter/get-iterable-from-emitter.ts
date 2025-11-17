/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { FluentEmitOptions } from '../types/base';
import { EventEmitter } from 'events';

export function getIterableFromEmitter<T = any>(
	emitter: EventEmitter,
	options: FluentEmitOptions | undefined,
): AsyncIterable<T> {
	return require('for-emit-of')(emitter, { ...options, keepAlive: 1000 });
}
