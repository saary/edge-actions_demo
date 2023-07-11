import { add } from 'https://raw.githubusercontent.com/saary/edge-actions_demo/main/add.ts';

export async function runAction(action: string, data: object) {
  switch (action) {
    case 'add':
      // const res = await add(data);
      return { result: 3 }
    default:
      return { error: 'No such action found' };
  }
}
