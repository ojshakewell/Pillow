import React from 'react';

// remove - no longer doing

const Calc = ({properties})  => {

	return (
		<div className="Calc">
			<ul className="CalcFields">
				<li>
					<label class="priceinputlabel" for="priceinput">Home Price</label> <br />
					<input class="priceinput" type="text" name="priceinput" />
				</li>

				<li>
					<label class="downpaymentinputlabel" for="downpaymentinput">Down Payment</label> <br />
					<input class="downpaymentinput" type="text" name="downpaymentinput" />
				</li>

				<li>
					<label class="interstrateinputlabel" for="interestrateinput">Interest Rate</label> <br />
					<input class="interestrateinput" type="text" name="interestrateinput" />
				</li>

			</ul>
			<br />
			<p>* All Loans are based on a 30-year fixed rate</p>

		</div>
	);
	
}

export default Calc;