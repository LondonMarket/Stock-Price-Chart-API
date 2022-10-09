import { Router } from 'express'
import { PriceChartRoutes } from './priceChartRoutes';
import { StockDataRoutes } from './stockData';

const router: Router = Router();

router.use('/pricechart', PriceChartRoutes);
router.use('/stockdata', StockDataRoutes);

export const MainRouter: Router = router;