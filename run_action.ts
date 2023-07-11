import { add } from 'https://gist.githubusercontent.com/saary/567caad1cf2a37a98ee0eeba0ee8e246/raw/5d8d9cb132956a2d09824ede3bde0e44a0ebb26a/add.ts';
                    'https://gist.githubusercontent.com/saary/567caad1cf2a37a98ee0eeba0ee8e246/raw/28f945dc1f9899109f1340651191251f1e5ccf20/add.ts

export async function runAction(action: string, data: object) {
  switch (action) {
    case 'add':
      return { result: await add(data) }
    default:
      return { error: 'No such action found' };
  }
}
