import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureDigitaltwins implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Digitaltwins',
                name: 'N8nDevAzureDigitaltwins',
                icon: { light: 'file:./azure-digitaltwins.png', dark: 'file:./azure-digitaltwins.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Digital Twins client for managing DigitalTwinsInstance.',
                defaults: { name: 'Azure Digitaltwins' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureDigitaltwinsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
