import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Character } from './character';

describe('Character', () => {
  let componentUnderTest: Character;

  beforeEach(() => {
    componentUnderTest = new Character();
    // componentUnderTest.initalName.set("World")
  })

  it('should create', () => {
    expect(componentUnderTest).toBeTruthy();
  });
});
