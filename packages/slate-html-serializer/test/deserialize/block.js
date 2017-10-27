
/** @jsx h */

import h from '../helpers/h'

export const config = {
  rules: [
    {
      deserialize(el, next) {
        switch (el.tagName.toLowerCase()) {
          case 'p': {
            return {
              kind: 'block',
              type: 'paragraph',
              nodes: next(el.childNodes),
            }
          }
        }
      }
    }
  ]
}

export const input = `
<p>one</p>
`.trim()

export const output = (
  <value>
    <document>
      <paragraph>
        one
      </paragraph>
    </document>
  </value>
)
