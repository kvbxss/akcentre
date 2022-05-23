exports.onCreateWebpackConfig = ({stage, loaders, actions}) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /@fullcalendar\/react/,
              use: loaders.null(),
            },
            {
              test: /@fullcalendar\/daygrid/,
              use: loaders.null(),
            },
            {
                test: /@fullcalendar\/timegrid/,
                use: loaders.null(),
              },
              {
                test: /@fullcalendar\/interaction/,
                use: loaders.null(),
              },
              {
                test: /@fullcalendar\/google-calendar/,
                use: loaders.null(),
              },
          ],
        },
      })
    }
  }