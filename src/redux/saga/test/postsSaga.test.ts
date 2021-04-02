// import fromGenerator from 'redux-saga-test';
import postsSaga from '../postsSaga';
import { cloneableGenerator } from '@redux-saga/testing-utils';

test('doStuffThenChangeColor', (assert: any) => {
  const gen = cloneableGenerator(postsSaga)();
  gen.next(); // DO_STUFF
  gen.next(); // DO_STUFF
  gen.next(); // CHOOSE_NUMBER

  assert.test('user choose an even number', (a: any) => {
    // cloning the generator before sending data
    const clone = gen.clone();
    a.deepEqual(
      clone.next(chooseNumber(2)).value,
      put(changeUI('red')),
      'should change the color to red'
    );

    a.equal(
      clone.next().done,
      true,
      'it should be done'
    );

    a.end();
  });

  // assert.test('user choose an odd number', a => {
  //   const clone = gen.clone();
  //   a.deepEqual(
  //     clone.next(chooseNumber(3)).value,
  //     put(changeUI('blue')),
  //     'should change the color to blue'
  //   );
  //
  //   a.equal(
  //     clone.next().done,
  //     true,
  //     'it should be done'
  //   );
  //
  //   a.end();
  // });
});
