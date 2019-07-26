var pnm = 40;
var bidGiven = 40;
var bidAccept = ((20/bidGiven) * 100);
var bidHold = ((15/bidGiven) * 100);
var bidDecline = ((5/bidGiven) * 100);

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
      text: 'Percentage of Bids Accepted, Declined, and Held'
    },
    legend: {
      display: true,
		  labels: {

      }
    }
  }
});
