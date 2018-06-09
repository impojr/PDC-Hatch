function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Fitbit Account</Text>}>
        <Oauth
          settingsKey="oauth"
          title="Login"
          label="Fitbit"
          status="Login"
          authorizeUrl="https://www.fitbit.com/oauth2/authorize"
          requestTokenUrl="https://api.fitbit.com/oauth2/token"
          clientId="22CSPL"
          clientSecret="fb5da283472bfec9d72620ef9c7d0a76"
          scope="activity"
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);