import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '../../node_modules/@servicenow/now-template-card';
import styles from './styles.scss';

const view = (state) => {
	const {cards}=state;
	return (
		<div id="cards-list">
			{	cards.map(card=>
					<div>
						<now-template-card-assist 
							tagline={card.tagline} 
							actions={card.actions} 
							heading={card.heading} 
							content={card.content} 
							footerContent={card.footerContent} 
							configAria={card.configAria} 
							contentItemMinWidth={card.contentItemMinWidth}>
						</now-template-card-assist>
					</div>
					)
			}
		
		</div>
	);
};


createCustomElement('x-526323-card-list', {
	renderer: {type: snabbdom},
	view,
	initialState: {
		cards:[
			{
				tagline:{"icon":"tree-view-long-outline","label":"Process"},
				actions:[{"id":"share","label":"Copy URL"},{"id":"close","label":"Mark Complete"}],
				heading: {"label":"my PDF docs are all locked from editing"},
				content: [{"label":"Number","value":{"type":"string","value":"INC0000020"}},{"label":"State","value":{"type":"string","value":"Closed"}},{"label":"Assignment Group","value":{"type":"string","value":"Service Desk"}},{"label":"Assigned To","value":{"type":"string","value":"Luke Willson"}}],
				footerContent:{"label":"Updated","value":"2019-01-15 08:41:09"},
				configAria:{},
				contentItemMinWidth:"200"
			},
			{
				tagline:{"icon":"tree-view-long-outline","label":"Process"},
				actions:[{"id":"share","label":"Copy URL"},{"id":"close","label":"Mark Complete"}],
				heading: {"label":"Printer in my office is out of toner"},
				content: [{"label":"Number","value":{"type":"string","value":"INC0000048"}},{"label":"State","value":{"type":"string","value":"Closed"}},{"label":"Assignment Group","value":{"type":"string","value":"Hardware"}},{"label":"Assigned To","value":{"type":"string","value":"ITIL User"}}],
				footerContent:{"label":"Updated","value":"2020-05-05 18:30:10"},
				configAria:{},
				contentItemMinWidth:"200"
			},
			{
				tagline:{"icon":"tree-view-long-outline","label":"Process"},
				actions:[{"id":"share","label":"Copy URL"},{"id":"close","label":"Mark Complete"}],
				heading: {"label":"Hang when trying to print VISIO document"},
				content: [{"label":"Number","value":{"type":"string","value":"INC0000008"}},{"label":"State","value":{"type":"string","value":"Closed"}},{"label":"Assignment Group","value":{"type":"string","value":"Software"}},{"label":"Assigned To","value":{"type":"string","value":"Howard Johnson"}}],
				footerContent: {"label":"Updated","value":"2020-01-15 08:41:09"},
				configAria:{},
				contentItemMinWidth:"200"
			},
			{
				tagline:{"icon":"tree-view-long-outline","label":"Process"},
				actions:[{"id":"share","label":"Copy URL"},{"id":"close","label":"Mark Complete"}],
				heading: {"label":"Can't read email"},
				content: [{"label":"Number","value":{"type":"string","value":"INC0000083"}},{"label":"State","value":{"type":"string","value":"Closed"}},{"label":"Assignment Group","value":{"type":"string","value":"Service Desk"}},{"label":"Assigned To","value":{"type":"string","value":"Charlie Whithers"}}],
				footerContent:{"label":"Updated","value":"2020-12-15 10:00:19"},
				configAria:{},
				contentItemMinWidth:"200"
			}
		]
	},
	styles
});