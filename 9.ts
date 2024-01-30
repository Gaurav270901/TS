//Create an interface representing a configuration object. Use Readonly to make the properties immutable and Partial to allow for partial updates.
// Interface representing a configuration object
interface Configuration {
  readonly apiKey: string;
  readonly endpoint: string;
  readonly timeout: number;
}
function getDefaultConfiguration(): Configuration {
  return {
    apiKey: "defaultApiKey",
    endpoint: "https://api.example.com",
    timeout: 5000,
  };
}
function updateConfiguration(
  currentConfig: Readonly<Configuration>,
  update: Partial<Configuration>
): Configuration {
  return { ...currentConfig, ...update };
}
const initialConfig: Configuration = getDefaultConfiguration();
const updatedConfig: Configuration = updateConfiguration(initialConfig, {
  timeout: 10000,
});
console.log(updatedConfig);
console.log(initialConfig);
