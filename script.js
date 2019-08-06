var pnm = 24;
var bidGiven = 1;
var bidAccept = ((1/bidGiven) * 100); // update these vars as recruitment continues
var bidHold = ((1/bidGiven) * 100);
var bidDecline = ((1/bidGiven) * 100);

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Bids Accepted(%)", "Bids Declined(%)", "Bids Held(%)"],
    datasets: [
      {
        backgroundColor: ["#33ff33", "#ff3333", "#ffff33"],
        data: [bidAccept, bidDecline, bidHold]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Percentage of Bids Accepted, Declined, and Held (GRAPH IS CURRENTLY NOTATIONAL DATA)'
    },
    legend: {
      display: true,
		  labels: {

      }
    }
  }
});
