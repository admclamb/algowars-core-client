import { TextFormattingPipe } from './text-formatting.pipe';

describe('TextFormattingPipe', () => {
  it('create an instance', () => {
    const pipe = new TextFormattingPipe();
    expect(pipe).toBeTruthy();
  });
});
