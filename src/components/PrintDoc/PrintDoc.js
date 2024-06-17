import MuiButton from 'components/Button/Button';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';

import './PrintDoc.css';

const PrintDoc = ({ name, phone, adharNum, queryDesc, pincode, category }) => {
	const options = {
		filename: `${name}-${phone}.pdf`,
		method: 'save',
		// default is Resolution.MEDIUM = 3, which should be enough, higher values
		// increases the image quality but also the size of the PDF, so be careful
		// using values higher than 10 when having multiple pages generated, it
		// might cause the page to crash or hang.
		resolution: Resolution.EXTREME,
		page: {
			// margin is in MM, default is Margin.NONE = 0
			margin: Margin.LARGE,
			// default is 'A4'
			format: 'A4',
			// default is 'portrait'
			orientation: 'portrait'
		},
		canvas: {
			// default is 'image/jpeg' for better size performance
			mimeType: 'image/jpeg',
			qualityRatio: 1
		},
		// Customize any value passed to the jsPDF instance and html2canvas
		// function. You probably will not need this and things can break,
		// so use with caution.
		overrides: {
			// see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
			pdf: {
				compress: true
			},
			// see https://html2canvas.hertzen.com/configuration for more options
			canvas: {
				useCORS: true
			}
		}
	};

	// you can also use a function to return the target element besides using React refs
	const getTargetElement = () => document.getElementById('container');

	const downloadPdf = () => generatePDF(getTargetElement, options);

	return (
		<div>
			<div id='container'>
				<div className='pdf-doc-wrapper'>
					<div className='query-doc-header'>
						Query raised on {new Date().toLocaleDateString()}, Please check your
						detils
					</div>
					<div className='doc-user-name'>{name}</div>
					<div className='doc-details'>
						<div className='key'>Phone</div>
						<div>-</div>
						<div className='key value'>{phone}</div>
					</div>
					<div className='doc-details'>
						<div className='key'>Adhar card</div>
						<div>-</div>
						<div className='key value'>{adharNum}</div>
					</div>
					<div className='doc-details'>
						<div className='key'>category</div>
						<div>-</div>
						<div className='key value'>{category}</div>
					</div>
					<div className='doc-details'>
						<div className='key'>Pincode</div>
						<div>-</div>
						<div className='key value'>{pincode}</div>
					</div>
					<div className='doc-details'>
						<div className='key'>Date</div>
						<div>-</div>
						<div className='key value'>{new Date().toLocaleDateString()}</div>
					</div>
					<div className='doc-details'>
						<div className='key'>Time</div>
						<div>-</div>
						<div className='key value'>{new Date().toLocaleTimeString()}</div>
					</div>
					<div className='doc-query-desc'>
						<div className='key' style={{ fontWeight: 500 }}>
							Query description
						</div>
						<div className='desc-content'>{queryDesc}</div>
					</div>
				</div>
			</div>

			<MuiButton
				onClick={downloadPdf}
				title='Download PDF'
				style={{ margin: 'auto', display: 'flex' }}
			/>
		</div>
	);
};

export default PrintDoc;
