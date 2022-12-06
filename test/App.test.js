import App from '../src/App'
import settings from '../settings.json'

const app = App(
  {
    stage: {
      ...settings['appSettings'].stage,
      useImageWorker: false,
      debug: false
    },
    debug: false,
  },
  {
    ...settings['platformSettings'],
    log: false,
    fontLoader: jest.fn()
  }
)

describe('App', () => {
  it('should render', () => {
    expect(app).toMatchSnapshot();
  })

  it('should display text', () => {
    const ourApp = app._getFocused();
    let text = ourApp.tag('Text').text.text;
    expect(text).toEqual("Let's start Building!")
  })
})