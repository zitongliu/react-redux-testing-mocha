import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it ('has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    // renderComponent returns a jquery object that contains our react component
    expect(component.find('textarea')).to.exist;
  });

  it('it has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {

    beforeEach(() => {
      component.find('textarea').simulate('change', 'some new comment');
    });

    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('some new comment');
    });

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  })

});
