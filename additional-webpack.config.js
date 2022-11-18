const path = require("path");

module.exports = (config, options) => {
    config?.module?.rules?.forEach(rule => {
        if(rule?.test?.toString?.() === /\.[cm]?tsx?$/.toString()) {
            rule?.exclude?.push?.(/\.asc\.tsx?$/)
        }
    });

    config?.module?.rules?.push?.(
        {
            test: /\.asc\.tsx?$/,
            loader: "as-loader",
            options: {
              bind: true,
            },
        },
    )

    return config;
};
