import { Router } from 'express'
import { PriceChartRoutes } from './priceChartRoutes';

const router: Router = Router();

router.use('/pricechart', PriceChartRoutes);

export const MainRouter: Router = router;