import { error } from '@sveltejs/kit';
import { posts } from '$lib/questions';
 
export function load({params}) {
	return {posts}
}

