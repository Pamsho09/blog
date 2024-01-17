'use client'
import {
    createBoldPlugin,
    createCodePlugin,
    createItalicPlugin,
    createStrikethroughPlugin,
    createUnderlinePlugin,
  } from '@udecode/plate-basic-marks';
  import { createBlockquotePlugin } from '@udecode/plate-block-quote';
  import { Plate, createPlugins } from '@udecode/plate-common';
  import { createHeadingPlugin } from '@udecode/plate-heading';
  import { createParagraphPlugin } from '@udecode/plate-paragraph';
  
  import { createPlateUI } from '@/lib/create-plate-ui';
  
  const plugins = createPlugins(
    [
      createParagraphPlugin(),
      createBlockquotePlugin(),
      createHeadingPlugin(),
  
      createBoldPlugin(),
      createItalicPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createCodePlugin(),
    ],
    {
      components: createPlateUI(),
    }
  );
  
  export default function BasicEditor() {
    return (
      <Plate
        plugins={plugins}
        // ...
      />
    );
  }
  