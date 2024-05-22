import parser from '@babel/parser';
import _traverse from '@babel/traverse';
import _generator from '@babel/generator';

export default {
  process(sourceText) {
    const traverse = _traverse.default;
    const generator = _generator.default;
    const ast = parser.parse(sourceText, { sourceType: 'module' });

    traverse(ast, {
      AssignmentExpression(path) {
        if (
            path.node.left.object &&
            path.node.left.object.name === "module" &&
            path.node.left.property.name === "exports"
        ) {
            path.remove();
        }
      },
    });

    const output = generator(ast, {}, sourceText);

    return {
      code: output.code,
    };
  },
}
