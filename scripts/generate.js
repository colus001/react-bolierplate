// @flow
const fs = require('fs')

const createStatelessTemplate = (Component) => `
// @flow
import React from 'react'
import classNames from 'classnames'

import './${Component}.scss'

type Props = {
  className?: string,
}

const ${Component} = ({ className }: Props) => (
  <div className={classNames('${Component}', className)}>
  </div>
)

export default ${Component}
`

const createComponentTemplate = (Component) => `
// @flow
import React, { Component } from 'react'
import classNames from 'classnames'

import './${Component}.scss'

type Props = {
  className?: string,
}

class ${Component} extends Component<Props> {
  render() {
    const { className } = this.props

    return (
      <div className={classNames('${Component}', className)}>
      </div>
    )
  }
}

export default ${Component}
`

const createContainerTemplate = (Component) => `
// @flow
import { connect } from 'react-redux'

import ${Component} from 'components/${Component}'

const mapStateToProps = (state: ReduxProps, ownProps: OwnProps) => ({
  ...ownProps,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(${Component})
`

const createStyleTemplate = (Component) => `
.${Component} {

}
`

const generate = () => {
  const type = process.argv[2]
  const name = process.argv[3]
  const reactClass = process.argv[4]
  if (!type || !name) {
    console.info('Usage: npm run gen [type] [name]')
    process.exit()
    return
  }

  let filePath = `src/${type}s/${name}.js`
  const isExist = fs.existsSync(filePath)
  if (isExist) throw new Error(`File already exists at ${filePath}`)

  switch (type) {
    case 'container':
      fs.writeFileSync(filePath, createContainerTemplate(name).trim())
      return
    case 'component':
    case 'screen':
      const createTemplate = reactClass === 'stateless' ? createStatelessTemplate : createComponentTemplate
      fs.writeFileSync(filePath, createTemplate(name).trim())
      fs.writeFileSync(`src/${type}s/${name}.scss`, createStyleTemplate(name).trim())
      return
    default:
      throw new Error(`Unsupported type: ${type}`)
  }
}

generate()
