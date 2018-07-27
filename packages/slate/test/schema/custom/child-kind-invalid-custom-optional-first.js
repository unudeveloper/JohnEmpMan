/** @jsx h */

import { CHILD_OBJECT_INVALID } from 'slate-schema-violations'
import h from '../../helpers/h'

export const schema = {
  blocks: {
    paragraph: {},
    quote: {
      nodes: [
        {
          match: [{ object: 'block', type: 'image' }],
          min: 0,
          max: 1,
        },
        {
          match: [{ object: 'block', type: 'paragraph' }],
          min: 1,
        },
      ],
      normalize: (change, { code, child }) => {
        if (code == CHILD_OBJECT_INVALID) {
          change.wrapBlockByKey(child.key, 'paragraph')
        }
      },
    },
  },
}

export const input = (
  <value>
    <document>
      <quote>text</quote>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <quote>
        <paragraph>text</paragraph>
      </quote>
    </document>
  </value>
)
