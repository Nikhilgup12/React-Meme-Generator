import {Component} from 'react'

import {
  MemeImageContainer,
  MemeMainContainer,
  MemeGeneratorContainer,
  MemeInputContainer,
  MemeMainHeading,
  ImageLabel,
  ImageInput,
  FontSelectInput,
  GenerateBtn,
  ImageInputContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageInput: '',
    topInput: '',
    bottomInput: '',
    fontInput: fontSizesOptionsList[0].optionId,
    memeStyle: {},
  }

  onImage = event => {
    this.setState({imageInput: event.target.value})
  }

  onTop = event => {
    this.setState({topInput: event.target.value})
  }

  onBottom = event => {
    this.setState({bottomInput: event.target.value})
  }

  onFont = event => {
    this.setState({fontInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {fontInput, imageInput} = this.state
    const memeStyle = {
      backgroundImage: `url(${imageInput})`,
      fontSize: `${fontInput}px`,
      // Other styles...
    }
    this.setState({memeStyle})
  }

  render() {
    const {topInput, bottomInput, memeStyle, fontInput, imageInput} = this.state
    return (
      <>
        <MemeMainContainer>
          <MemeGeneratorContainer>
            <MemeInputContainer>
              <MemeMainHeading> Meme Generator </MemeMainHeading>
              <form onSubmit={this.onSubmitForm}>
                <ImageInputContainer>
                  <ImageLabel htmlFor="imageInput">Image URL</ImageLabel>
                  <br />
                  <ImageInput
                    type="text"
                    id="imageInput"
                    placeholder="Enter the image URL"
                    value={imageInput}
                    onChange={this.onImage}
                  />
                </ImageInputContainer>
                <ImageInputContainer>
                  <ImageLabel htmlFor="TopInput">Top Text</ImageLabel>
                  <br />
                  <ImageInput
                    type="text"
                    id="TopInput"
                    placeholder="Enter the Top Text"
                    value={topInput}
                    onChange={this.onTop}
                  />
                </ImageInputContainer>
                <ImageInputContainer>
                  <ImageLabel htmlFor="BottomInput">Bottom Text</ImageLabel>
                  <br />
                  <ImageInput
                    type="text"
                    id="BottomInput"
                    placeholder="Enter Bottom Text"
                    value={bottomInput}
                    onChange={this.onBottom}
                  />
                </ImageInputContainer>
                <ImageInputContainer>
                  <ImageLabel htmlFor="FontInput">Font Size</ImageLabel>
                  <br />
                  <FontSelectInput
                    id="FontInput"
                    onChange={this.onFont}
                    value={fontInput}
                  >
                    {fontSizesOptionsList.map(each => (
                      <option value={each.optionId} key={each.optionId}>
                        {each.displayText}
                      </option>
                    ))}
                  </FontSelectInput>
                  <GenerateBtn type="submit">Generate</GenerateBtn>
                </ImageInputContainer>
              </form>
            </MemeInputContainer>

            <MemeImageContainer style={memeStyle} data-testid="meme">
              <p> {topInput} </p>
              <p> {bottomInput} </p>
            </MemeImageContainer>
          </MemeGeneratorContainer>
        </MemeMainContainer>
      </>
    )
  }
}

export default MemeGenerator
