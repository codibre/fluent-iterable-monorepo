/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyIterable } from 'augmentative-iterable';

export interface Iterate {
	(it: any): AnyIterable<any>;
}
