import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Performance } from '../../models/performance';
import { Chart, ChartConfiguration, ChartItem, ScatterDataPoint, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  title = 'app pour objectif ultra trail';
  description = "Bienvenue à vous, où tout ce que vous avez envie d'avoir en statistiques est devant vous";

  TableauDesPerf: Performance[] = [
    { distance: 1, time: '3:14', date: '2023-08-01' },
    { distance: 2, time: '7:36', date: '2023-08-02' },
    { distance: 3, time: '14:00', date: '2023-08-03' },
    { distance: 1, time: '5:00', date: '2023-08-04' },
    { distance: 2, time: '12:00', date: '2023-08-05' }
  ];

  distances: number[] = [1, 2, 3];  // Liste des distances disponibles
  selectedDistance: number | null = null;
  filteredPerf: Performance[] = [...this.TableauDesPerf];
  chart: Chart | null = null;

  ngOnInit(): void {
    Chart.register(...registerables);
    this.createChart();
  }
 createChart(): void {
    const chartItem: ChartItem = document.getElementById('performanceChart') as ChartItem;

    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }

    const data = {
      datasets: [{
        label: 'Performance',
        data: this.filteredPerf.map(perf => ({
          x: new Date(perf.date).getTime(),
          y: this.convertTimeToSeconds(perf.time)
        })),
        backgroundColor: '#FF5733',
        pointRadius: 6
      }]
    };

    const config: ChartConfiguration<'scatter', ScatterDataPoint[], unknown> = {
      type: 'scatter',
      data: data,
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'time',
            position: 'bottom',
            title: {
              display: true,
              text: 'Date',
              color: '#fff'
            },
            ticks: {
              color: '#fff'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            time: {
              unit: 'day',
              tooltipFormat: 'dd MMM yyyy'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Temps',
              color: '#fff'
            },
            ticks: {
              color: '#fff',
              callback: (value) => this.secondsToTimeFormat(value as number)
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const timeInSeconds = (context.raw as ScatterDataPoint).y as number;
                return `Temps: ${this.secondsToTimeFormat(timeInSeconds)}`;
              }
            }
          }
        }
      }
    };

    this.chart = new Chart(chartItem, config);
  }

  filterDistance(distance: number | null): void {
    if (distance === null) {
      this.filteredPerf = [...this.TableauDesPerf];
    } else {
      this.filteredPerf = this.TableauDesPerf.filter(perf => perf.distance === distance);
    }
    this.createChart();  // Mettre à jour le graphique avec les nouvelles données
  }

  resetFilter(): void {
    this.selectedDistance = null;
    this.filterDistance(null);  // Réinitialiser le filtre
  }

  convertTimeToSeconds(time: string): number {
    const [minutes, seconds] = time.split(':').map(Number);
    return minutes * 60 + seconds;
  }

  secondsToTimeFormat(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
  onDistanceChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const value = target.value;

    // Convertir la valeur en nombre ou null si la valeur est vide
    this.filterDistance(value ? +value : null);
  }

}
