
import ReactDom from 'react-dom';
import MainApp from "./App";

it('render whithout crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<MainApp/>, div);
  ReactDom.unmountComponentAtNode(div);
});
