/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { FluentAsyncIterable } from './types';
import { AnyIterable } from 'augmentative-iterable';
import { FluentAsyncClass } from './fluent-async-class';

/**
 * Tranforms an asynchronous iterable into a [[FluentAsyncIterable]].
 * @typeparam T The type of the items in the async iterable.
 * @param iterable The asynchronous iterable instance.
 * @returns The [[FluentAsyncIterable]] instance.
 */
export function fluentAsync<T>(
	iterable: AnyIterable<T> | PromiseLike<AnyIterable<T>>,
): FluentAsyncIterable<T> {
	return iterable instanceof FluentAsyncClass
		? (iterable as unknown as FluentAsyncIterable<T>)
		: (new FluentAsyncClass(iterable) as any);
}
