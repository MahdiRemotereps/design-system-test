'use strict';
exports.__esModule = true;
exports.Resource = void 0;
var react_1 = require('react');
var PageFooter_styles_1 = require('./PageFooter.styles');
exports.Resource = function (_a) {
  var image = _a.image,
    title = _a.title,
    description = _a.description,
    links = _a.links;
  return (
    <div>
      <PageFooter_styles_1.Resource>
        {image}
        <PageFooter_styles_1.Meta>
          <PageFooter_styles_1.ResourceTitle>{title}</PageFooter_styles_1.ResourceTitle>
          <PageFooter_styles_1.ResourceDesc>{description}</PageFooter_styles_1.ResourceDesc>
          <div>{typeof links === 'function' ? links() : links}</div>
        </PageFooter_styles_1.Meta>
      </PageFooter_styles_1.Resource>
    </div>
  );
};
