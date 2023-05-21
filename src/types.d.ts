export type TopStories = number[];

export type Story = {
  id: number;
  by: string;
  descendants?: number;
  kids?: number[];
  score: number;
  /**
   * Seconds elapsed since the epoch
   */
  time: number;
  title: string;
  type: string;
  text?: string;
  url?: string;
};
